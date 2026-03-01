-- Enable anonymous CRUD on questions for MVP frontend admin panel.
-- WARNING: this is not strong security because anon key is public.

alter table public.questions enable row level security;

drop policy if exists "anon can read active questions" on public.questions;
drop policy if exists "anon can read all questions" on public.questions;
drop policy if exists "anon can insert questions" on public.questions;
drop policy if exists "anon can update questions" on public.questions;
drop policy if exists "anon can delete questions" on public.questions;

create policy "anon can read all questions"
on public.questions
for select
to anon
using (true);

create policy "anon can insert questions"
on public.questions
for insert
to anon
with check (
  char_length(trim(text)) between 8 and 320
  and char_length(trim(category)) between 1 and 40
);

create policy "anon can update questions"
on public.questions
for update
to anon
using (true)
with check (
  char_length(trim(text)) between 8 and 320
  and char_length(trim(category)) between 1 and 40
);

create policy "anon can delete questions"
on public.questions
for delete
to anon
using (true);
