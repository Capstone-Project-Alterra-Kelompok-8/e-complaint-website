const ProsesAduan = () => {
  return (
    <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4 h-72">
      <h5 className="font-poppins font-semibold text-2xl">Proses Aduan</h5>
      <section className="flex flex-col">
        <div className="bg-main-color p-4">
          <p>
            No Aduan <span>G5102</span>
          </p>
        </div>
      </section>
      <div className="w-full flex flex-col">
        {/* <div className='text-dark-3 flex justify-center w-full text-xl'>
                                    <p>Belum ada Proses</p>
                                </div> */}

        <div className="flex w-full text-xl flex-col">
          <h4>Tidak Layak</h4>
          <p>Waktu</p>
          <h5>Admin</h5>
          <p>Deskripsi</p>
        </div>
      </div>
    </div>
  );
}

export default ProsesAduan