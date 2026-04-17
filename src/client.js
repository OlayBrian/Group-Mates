import { createClient } from '@supabase/supabase-js';

const URL = "https://kwusoipfoylvjhaoasht.supabase.co";

const API_KEY = "sb_publishable_RwbVN9CEComC8XzHoNqTlQ_ckdZD-KZ";

export const supabase = createClient(URL, API_KEY);


