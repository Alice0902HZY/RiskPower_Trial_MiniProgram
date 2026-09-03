import { useMemo, useState } from "react";
import gelueLogo from "@/imports/__logo-update-14___.png";
import riskpowerLogo from "@/imports/01_RiskPower_Logo-blue.png";

const PRODUCTS = [
  { id: "ai-hazop", label: "AI-HAZOP", desc: "智能 HAZOP 分析" },
  { id: "hazop-agent", label: "HAZOP 审查智能体", desc: "自动审查与建议" },
  { id: "ai-safety-doc", label: "AI 安全专篇", desc: "安全专篇智能编制" },
  { id: "safety-doc-agent", label: "安全专篇审查智能体", desc: "合规智能审查" },
  { id: "ai-sil", label: "AI-SIL", desc: "SIL 定级与验证" },
  { id: "ai-qra", label: "AI-QRA", desc: "定量风险评估" },
  { id: "ai-moc", label: "AI-MOC", desc: "AI-HAZOP 赋能变更管理" },
];

type Errors = Partial<Record<"name" | "phone" | "products", string>>;

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = "请输入姓名";
    if (!phone.trim()) e.phone = "请输入手机号";
    else if (!/^1[3-9]\d{9}$/.test(phone.trim()))
      e.phone = "请输入有效的中国大陆手机号（11 位数字）";
    if (selected.length === 0) e.products = "请至少选择一个产品";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  const selectedLabels = useMemo(
    () => PRODUCTS.filter((p) => selected.includes(p.id)).map((p) => p.label),
    [selected],
  );

  if (submitted) {
    return (
      <div className="min-h-full bg-brand-tint flex items-center justify-center px-6">
        <div className="w-full max-w-[440px] rounded-3xl bg-white p-9 text-center shadow-[0_24px_60px_-24px_rgba(0,92,151,0.35)]">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12.5l5 5 11-11"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-brand-dark">申请已提交</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            我们已收到 <span className="font-semibold text-slate-700">{name}</span> 的试用申请，
            顾问将尽快与您联系，为您开通试用环境。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {selectedLabels.map((l) => (
              <span
                key={l}
                className="rounded-full bg-brand-tint px-3 py-1 text-xs font-medium text-brand"
              >
                {l}
              </span>
            ))}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            返回修改
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-brand-tint">
      <div className="mx-auto flex min-h-full w-full max-w-[480px] flex-col bg-white shadow-[0_0_80px_-40px_rgba(0,92,151,0.4)]">
        {/* WeChat mini-program nav bar */}
        <div className="sticky top-0 z-30 bg-brand-dark text-white shadow-[0_2px_12px_-6px_rgba(0,0,0,0.5)]">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-4 text-[13px] font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <path d="M1 8.5a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zM5.5 5.5a1 1 0 011-1h1a1 1 0 011 1v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-5zM10 2.5a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1h-1a1 1 0 01-1-1v-8z" fill="currentColor" />
              </svg>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M8 3.5c1.9 0 3.6.7 4.9 1.9l1.1-1.2A9 9 0 008 1.5 9 9 0 002 4.2l1.1 1.2A7 7 0 018 3.5z" fill="currentColor" />
                <path d="M8 6.5c1 0 1.9.4 2.6 1l1.1-1.2A5.5 5.5 0 008 5a5.5 5.5 0 00-3.7 1.4l1.1 1.1A3.9 3.9 0 018 6.5z" fill="currentColor" />
                <circle cx="8" cy="9.5" r="1.3" fill="currentColor" />
              </svg>
              <div className="ml-0.5 flex h-3 w-6 items-center rounded-[3px] border border-white/60 px-[1.5px]">
                <div className="h-1.5 w-full rounded-[1px] bg-white" />
              </div>
            </div>
          </div>
          {/* nav title + capsule */}
          <div className="relative mt-2.5 flex h-11 items-center justify-center">
            <span className="text-[17px] font-semibold">预约试用</span>
            <div className="absolute right-4 flex h-8 items-center gap-3 rounded-full border border-white/25 px-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="16" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="16" r="2.4" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <span className="h-4 w-px bg-white/25" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand px-6 pb-14 pt-5 text-white">
          {/* abstract hexagon composition — point · line · plane */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 480 340"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="hexPlane" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hexLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.04" />
              </linearGradient>
            </defs>

            {/* 面 — filled hexagon plane, top-right corner */}
            <path
              d="M430 -46 L500 -6 L500 74 L430 114 L360 74 L360 -6 Z"
              fill="url(#hexPlane)"
            />

            {/* 线 — outline hexagon, mid-left (separate, no overlap) */}
            <path
              d="M96 170 L150 201 L150 263 L96 294 L42 263 L42 201 Z"
              stroke="url(#hexLine)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* 线 — connective stroke linking the two shapes */}
            <g stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1">
              <path d="M150 201 L360 40" strokeDasharray="2 6" />
            </g>

            {/* 点 — vertices of the plane hexagon */}
            <g fill="#ffffff">
              <circle cx="430" cy="-46" r="2.2" opacity="0.85" />
              <circle cx="500" cy="-6" r="1.8" opacity="0.5" />
              <circle cx="500" cy="74" r="1.8" opacity="0.5" />
              <circle cx="430" cy="114" r="2" opacity="0.7" />
              <circle cx="360" cy="74" r="1.6" opacity="0.45" />
              <circle cx="360" cy="-6" r="2.4" opacity="0.9" />
            </g>

            {/* 点 — vertices of the outline hexagon */}
            <g fill="#ffffff">
              <circle cx="96" cy="170" r="2.6" opacity="0.9" />
              <circle cx="150" cy="201" r="1.8" opacity="0.55" />
              <circle cx="150" cy="263" r="1.6" opacity="0.4" />
              <circle cx="96" cy="294" r="1.8" opacity="0.5" />
              <circle cx="42" cy="263" r="1.6" opacity="0.4" />
              <circle cx="42" cy="201" r="1.8" opacity="0.55" />
            </g>
          </svg>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-1.5 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]">
              <img
                src={riskpowerLogo}
                alt="RiskPower AI"
                className="h-full w-full object-contain"
              />
            </div>
            <h1 className="mt-5 text-2xl font-black tracking-tight">RiskPower AI</h1>
            <p className="mt-1.5 text-sm font-medium text-white/85">
              过程安全风险 AI 平台
            </p>
            <p className="mt-4 max-w-[88%] text-[13px] leading-relaxed text-white/70">
              填写以下信息，即刻进入试用环境，体验智能化的过程安全风险分析与审查。
            </p>
          </div>
        </header>

        {/* Form card */}
        <main className="relative -mt-9 flex-1 rounded-t-3xl bg-white px-6 pb-6 pt-7">
          <div className="space-y-5">
            <Field
              label="姓名"
              required
              value={name}
              onChange={(v) => setName(v)}
              placeholder="请输入您的姓名"
              error={errors.name}
            />
            <Field
              label="手机号"
              required
              value={phone}
              onChange={(v) => setPhone(v.replace(/[^\d]/g, "").slice(0, 11))}
              placeholder="请输入手机号"
              inputMode="numeric"
              error={errors.phone}
            />
            <Field
              label="邮箱"
              value={email}
              onChange={(v) => setEmail(v)}
              placeholder="选填"
              inputMode="email"
            />
            <Field
              label="企业名称"
              value={company}
              onChange={(v) => setCompany(v)}
              placeholder="选填"
            />

            {/* Products */}
            <div>
              <div className="mb-2.5 flex items-baseline justify-between">
                <label className="text-sm font-semibold text-slate-700">
                  感兴趣的产品
                  <span className="ml-1 text-brand">*</span>
                </label>
                {selected.length > 0 && (
                  <span className="text-xs font-medium text-brand">
                    已选 {selected.length}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {PRODUCTS.map((p) => {
                  const active = selected.includes(p.id);
                  return (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => toggle(p.id)}
                      className={`group relative flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                        active
                          ? "border-brand bg-brand-tint shadow-[0_4px_14px_-6px_rgba(0,92,151,0.5)]"
                          : "border-slate-200 bg-white hover:border-brand/40"
                      }`}
                    >
                      <span
                        className={`absolute right-2.5 top-2.5 flex h-4 w-4 items-center justify-center rounded-[5px] border transition-colors ${
                          active
                            ? "border-brand bg-brand text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {active && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5 12.5l4 4 10-10"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`pr-5 text-[13px] font-semibold leading-tight ${
                          active ? "text-brand-dark" : "text-slate-700"
                        }`}
                      >
                        {p.label}
                      </span>
                      <span className="mt-1 text-[11px] leading-tight text-slate-400">
                        {p.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.products && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.products}
                </p>
              )}
            </div>
          </div>
        </main>

        {/* Sticky CTA */}
        <div className="sticky bottom-0 z-10 border-t border-slate-100 bg-white/90 px-6 py-4 backdrop-blur">
          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-brand py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(0,92,151,0.7)] transition-transform active:scale-[0.98]"
          >
            进入试用环境
          </button>
          <p className="mt-2.5 text-center text-[11px] text-slate-400">
            提交即表示同意
            <span className="text-brand">《服务协议》</span>与
            <span className="text-brand">《隐私政策》</span>
          </p>
          {/* Provider logo */}
          <div className="mt-3 flex items-center justify-center border-t border-slate-100 pt-3">
            <img src={gelueLogo} alt="歌略技术" className="h-10 w-auto object-contain opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  placeholder,
  error,
  inputMode,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  inputMode?: "numeric" | "email" | "text";
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-brand">*</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className={`w-full rounded-xl border bg-slate-50/60 px-4 py-3 text-[15px] text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 ${
          error ? "border-red-300" : "border-slate-200"
        }`}
      />
      {error && <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}
