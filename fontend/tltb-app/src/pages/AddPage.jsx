import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../components/AllFoodPage.css';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080';

function AddPage() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		name: '',
		category: '',
		price: 0,
		description: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: name === 'price' ? Number(value) : value }));
	};

	const handleSave = (e) => {
		e.preventDefault();
		// ask for confirmation before adding
		Swal.fire({
			title: 'ยืนยันการเพิ่มเมนู',
			html: `<strong>${form.name || '(ไม่มีชื่อ)'}</strong><br/>หมวดหมู่: ${form.category || '-'}<br/>ราคา: ฿${form.price || 0}`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'เพิ่ม',
			cancelButtonText: 'ยกเลิก',
		}).then(async (result) => {
			if (result.isConfirmed) {
								// POST to backend
								try {
									const payload = {
										subCategory: form.category || '',
										name: form.name,
										price: Number(form.price) || 0,
										description: form.description || '',
									};
									const res = await fetch(`${API_BASE}/api/v1/foods`, {
										method: 'POST',
										headers: { 'Content-Type': 'application/json' },
										body: JSON.stringify(payload),
									});
									if (!res.ok) throw new Error('create failed');
									// notify list to refresh
									window.dispatchEvent(new Event('menuUpdated'));
									Swal.fire({ title: 'เพิ่มเมนูสำเร็จ', icon: 'success', timer: 1200, showConfirmButton: false });
									navigate('/admin/all-food');
								} catch (err) {
									console.error('Create failed', err);
									Swal.fire({ title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถเพิ่มเมนูได้', icon: 'error' });
								}
			}
		});
	};

	return (
		<div className="min-h-screen all-food-page">
			<main className="homepage">
				<section style={{ paddingTop: '0.25rem', paddingBottom: '1rem' }}>
					<div className="menu-container max-w-4xl mx-auto px-4">
						<div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
							<button onClick={() => navigate(-1)} className="btn btn-primary back-btn">← กลับ</button>
							<h1 style={{ margin: 0, color: 'var(--cafe-espresso)' }}>เพิ่มเมนูใหม่</h1>
						</div>

						<form onSubmit={handleSave} className="form-card">
							<label style={{ display: 'block', marginBottom: '0.75rem' }}>
								ชื่อเมนู
								<input className="form-input" name="name" value={form.name} onChange={handleChange} required />
							</label>

							<label style={{ display: 'block', marginBottom: '0.75rem' }}>
								หมวดหมู่
								<input className="form-input" name="category" value={form.category} onChange={handleChange} required />
							</label>

							<div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
								<label style={{ flex: 1 }}>
									ราคา
									<input className="form-input" name="price" type="number" value={form.price} onChange={handleChange} required />
								</label>
							</div>

							<label style={{ display: 'block', marginBottom: '0.75rem' }}>
								รายละเอียด
								<textarea className="form-textarea" name="description" value={form.description} onChange={handleChange} rows={4} />
							</label>

							<div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
								<button type="button" onClick={() => navigate(-1)} className="btn btn-ghost">ยกเลิก</button>
								<button type="submit" className="btn btn-primary">เพิ่มเมนู</button>
							</div>
						</form>
					</div>
				</section>
			</main>
		</div>
	);
}

export default AddPage;
