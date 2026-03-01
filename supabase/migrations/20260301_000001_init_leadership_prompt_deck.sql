create extension if not exists pgcrypto;

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  text text not null,
  category text not null,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.game_sessions (
  id uuid primary key default gen_random_uuid(),
  client_id text not null,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  app_version text
);

create table if not exists public.card_events (
  id bigint generated always as identity primary key,
  session_id uuid not null references public.game_sessions(id) on delete cascade,
  client_id text not null,
  event_type text not null,
  question_id uuid references public.questions(id),
  hand_index integer,
  meta_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint card_events_event_type_check check (
    event_type in ('shuffle_start', 'shuffle_done', 'hand_dealt', 'card_hover', 'card_pick', 'card_close')
  )
);

create index if not exists questions_active_sort_idx on public.questions(is_active, sort_order);
create index if not exists questions_category_idx on public.questions(category);
create index if not exists game_sessions_client_idx on public.game_sessions(client_id);
create index if not exists game_sessions_started_desc_idx on public.game_sessions(started_at desc);
create index if not exists card_events_session_created_idx on public.card_events(session_id, created_at);
create index if not exists card_events_event_created_idx on public.card_events(event_type, created_at);
create index if not exists card_events_question_idx on public.card_events(question_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_questions_set_updated_at on public.questions;
create trigger trg_questions_set_updated_at
before update on public.questions
for each row
execute function public.set_updated_at();

alter table public.questions enable row level security;
alter table public.game_sessions enable row level security;
alter table public.card_events enable row level security;

-- questions: anonymous read only for active rows
create policy "anon can read active questions"
on public.questions
for select
to anon
using (is_active = true);

-- game_sessions: anonymous insert/select only
create policy "anon can insert game sessions"
on public.game_sessions
for insert
to anon
with check (char_length(client_id) between 8 and 128);

create policy "anon can read game sessions"
on public.game_sessions
for select
to anon
using (true);

-- card_events: anonymous insert/select only
create policy "anon can insert card events"
on public.card_events
for insert
to anon
with check (
  char_length(client_id) between 8 and 128
  and (hand_index is null or (hand_index >= 0 and hand_index <= 4))
  and jsonb_typeof(meta_json) = 'object'
);

create policy "anon can read card events"
on public.card_events
for select
to anon
using (true);
