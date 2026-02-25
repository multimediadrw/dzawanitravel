"use client";

import { useState, useEffect } from "react";

interface TabunganUmroh {
  id: string;
  namaLengkap: string;
  nomorWhatsApp: string;
  domisili: string;
  rencanaKeberangkatan: string;
  status: string;
  catatan: string | null;
  createdAt: string;
  updatedAt: string;
}

const STATUS_LIST = ["pending", "aktif", "selesai", "dibatalkan"];

const statusColor: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  aktif: "bg-blue-100 text-blue-800",
  selesai: "bg-green-100 text-green-800",
  dibatalkan: "bg-red-100 text-red-800",
};

export default function TabunganUmrohAdminPage() {
  const [data, setData] = useState<TabunganUmroh[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<TabunganUmroh | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("semua");

  const [form, setForm] = useState({
    namaLengkap: "",
    nomorWhatsApp: "",
    domisili: "",
    rencanaKeberangkatan: "",
    status: "pending",
    catatan: "",
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/tabungan-umroh");
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openDetail = (item: TabunganUmroh) => {
    setSelected(item);
    setShowDetail(true);
    setEditMode(false);
  };

  const openAdd = () => {
    setForm({ namaLengkap: "", nomorWhatsApp: "", domisili: "", rencanaKeberangkatan: "", status: "pending", catatan: "" });
    setEditMode(false);
    setShowForm(true);
  };

  const openEdit = (item: TabunganUmroh) => {
    setForm({
      namaLengkap: item.namaLengkap,
      nomorWhatsApp: item.nomorWhatsApp,
      domisili: item.domisili,
      rencanaKeberangkatan: item.rencanaKeberangkatan,
      status: item.status,
      catatan: item.catatan || "",
    });
    setSelected(item);
    setEditMode(true);
    setShowForm(true);
    setShowDetail(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editMode && selected) {
        await fetch(`/api/tabungan-umroh/${selected.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/tabungan-umroh", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      await fetchData();
      setShowForm(false);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/tabungan-umroh/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      await fetchData();
      if (selected?.id === id) setSelected((prev) => prev ? { ...prev, status } : null);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await fetch(`/api/tabungan-umroh/${id}`, { method: "DELETE" });
      await fetchData();
      setShowDetail(false);
    } catch (e) {
      console.error(e);
    }
  };

  const filtered = data.filter((item) => {
    const matchSearch =
      item.namaLengkap.toLowerCase().includes(search.toLowerCase()) ||
      item.nomorWhatsApp.includes(search) ||
      item.domisili.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "semua" || item.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const stats = {
    total: data.length,
    pending: data.filter((d) => d.status === "pending").length,
    aktif: data.filter((d) => d.status === "aktif").length,
    selesai: data.filter((d) => d.status === "selesai").length,
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tabungan Umroh</h1>
          <p className="text-gray-500 text-sm mt-1">Kelola pendaftar tabungan umroh Dzawani × BSI</p>
        </div>
        <button
          onClick={openAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-700 transition flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Pendaftar
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Pendaftar", value: stats.total, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Pending", value: stats.pending, color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Aktif Menabung", value: stats.aktif, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Selesai", value: stats.selesai, color: "text-green-600", bg: "bg-green-50" },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} rounded-2xl p-4`}>
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className={`text-3xl font-bold ${s.color} mt-1`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-4 flex flex-wrap gap-3 items-center">
        <input
          type="text"
          placeholder="Cari nama, WhatsApp, atau domisili..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          <option value="semua">Semua Status</option>
          {STATUS_LIST.map((s) => (
            <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nama</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">WhatsApp</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Domisili</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Keberangkatan</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-gray-400">Memuat data...</td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-gray-400">Belum ada pendaftar tabungan umroh</td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{item.namaLengkap}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <a href={`https://wa.me/${item.nomorWhatsApp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                      {item.nomorWhatsApp}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.domisili}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.rencanaKeberangkatan}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[item.status] || "bg-gray-100 text-gray-700"}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openDetail(item)} className="text-purple-600 hover:text-purple-800 text-sm font-medium">Detail</button>
                      <button onClick={() => openEdit(item)} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                      <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Hapus</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {showDetail && selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Detail Pendaftar</h2>
              <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Nama Lengkap</p>
                  <p className="text-gray-900 font-medium mt-1">{selected.namaLengkap}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">WhatsApp</p>
                  <a href={`https://wa.me/${selected.nomorWhatsApp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-medium mt-1 block">
                    {selected.nomorWhatsApp}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Domisili</p>
                  <p className="text-gray-900 mt-1">{selected.domisili}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Rencana Keberangkatan</p>
                  <p className="text-gray-900 mt-1">{selected.rencanaKeberangkatan}</p>
                </div>
              </div>
              {selected.catatan && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Catatan</p>
                  <p className="text-gray-900 mt-1">{selected.catatan}</p>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {STATUS_LIST.map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                        selected.status === s ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-between">
              <button onClick={() => handleDelete(selected.id)} className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition text-sm font-medium">
                Hapus Data
              </button>
              <div className="flex gap-2">
                <button onClick={() => openEdit(selected)} className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm font-medium">
                  Edit
                </button>
                <button onClick={() => setShowDetail(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition text-sm font-medium">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal (Add / Edit) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">{editMode ? "Edit Pendaftar" : "Tambah Pendaftar"}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Nama Lengkap *</label>
                <input
                  type="text"
                  value={form.namaLengkap}
                  onChange={(e) => setForm({ ...form, namaLengkap: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Nama lengkap pendaftar"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Nomor WhatsApp *</label>
                <input
                  type="text"
                  value={form.nomorWhatsApp}
                  onChange={(e) => setForm({ ...form, nomorWhatsApp: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Contoh: 08123456789"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Domisili *</label>
                <input
                  type="text"
                  value={form.domisili}
                  onChange={(e) => setForm({ ...form, domisili: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Kota / Kabupaten"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Rencana Keberangkatan *</label>
                <select
                  value={form.rencanaKeberangkatan}
                  onChange={(e) => setForm({ ...form, rencanaKeberangkatan: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="">-- Pilih Tahun --</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="Belum Menentukan">Belum Menentukan</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  {STATUS_LIST.map((s) => (
                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Catatan (opsional)</label>
                <textarea
                  value={form.catatan}
                  onChange={(e) => setForm({ ...form, catatan: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
                  placeholder="Catatan tambahan..."
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition text-sm font-medium">
                Batal
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition text-sm font-medium disabled:opacity-50"
              >
                {saving ? "Menyimpan..." : editMode ? "Simpan Perubahan" : "Tambah Pendaftar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
