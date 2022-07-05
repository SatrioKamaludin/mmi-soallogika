--a
	select * from barang order by harga
--b
	select * from pelanggan
	where alamat='bandung'
	and nama like '%g%'
--c
	select transaksi.kode, transaksi.tanggal, pelanggan.nama, barang.nama as "nama barang", transaksi.jumlah_barang as jumlah, barang.harga as "harga satuan", (transaksi.jumlah_barang * barang.harga) as 'total'
	from transaksi
	inner join pelanggan on kode_pelanggan=pelanggan.kode
	inner join barang on kode_barang=barang.kode
--d
	select pelanggan.nama, sum(transaksi.jumlah_barang) as jumlah, sum((transaksi.jumlah_barang * barang.harga)) as 'total'
	from transaksi
	inner join pelanggan on kode_pelanggan=pelanggan.kode
	inner join barang on kode_barang=barang.kode
	group by pelanggan.nama
