// Fallback ringan untuk loading.js tiap halaman -- ditampilkan langsung saat
// navigasi (sudah di-prefetch Next.js), sementara data halaman tujuan masih
// di-fetch di server.
export default function PageLoading() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-8 w-8 rounded-full border-2 border-slate-200 border-t-brand animate-spin" />
    </div>
  );
}
