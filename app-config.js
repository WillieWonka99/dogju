/* 狗聚：共用資料庫設定（Supabase）
   把 Supabase 專案的兩個值填進下面的引號裡（Project Settings → API Keys / Data API）：
     supabaseUrl      例如 'https://abcdefghijklmnop.supabase.co'
     supabaseAnonKey  「anon public」或「Publishable key」（sb_publishable_…）— 這把本來就是公開的
   千萬不要放 service_role / secret key。
   兩個都空著 = 本機模式：資料只存在那支手機，別人看不到。
   adminTokenHash = 管理連結的指紋（不是密碼本身），由 tools/build_web.py 自動填，不用動。 */
window.APP_CONFIG = {
  supabaseUrl: 'https://bxoaolzovbcdulqacaur.supabase.co',
  supabaseAnonKey: 'sb_publishable_G9rinvl00nX_2jGGOH7GTQ_333VVTA6',
  adminTokenHash: '92f687c62d6d4018a8247cf1e52723e53604a0e6db7a989477a4c51d747545e3'
};
