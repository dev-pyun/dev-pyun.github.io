import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[46ch] border-t-2 border-signal pt-5">
      <h1 className="readout text-[1.5rem] leading-[1.25] text-engrave">
        해당 주소에 연결된 항목이 없습니다.
      </h1>
      <p className="mt-4 flex gap-3 text-engrave-2">
        <span aria-hidden="true" className="mt-[13px] h-px w-6 shrink-0 bg-signal" />
        <span>주소가 바뀌었거나 처음부터 없던 페이지입니다.</span>
      </p>
      <Link
        href="/"
        className="plate mt-7 inline-flex items-center gap-2 border border-score-3 px-4 py-2.5 !text-engrave-2 no-underline transition-colors hover:border-engrave-3 hover:!text-engrave"
      >
        <span aria-hidden="true" className="h-px w-5 bg-current" />
        처음으로
      </Link>
    </div>
  );
}
