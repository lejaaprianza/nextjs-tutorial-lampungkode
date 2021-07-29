import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Link href="/users">
        <a>Index</a>
      </Link>
      <br />
      <Link href="/users/kode">
        <a>Kode</a>
      </Link>
    </div>
  );
}
