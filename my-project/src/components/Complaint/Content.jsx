const Content = () => {
  return (
    <>
      <div className="lg:w-[500px] h-[500px] md:w-full bg-[#E6E0E9] p-2 rounded-lg drop-shadow-lg">
        <img
          className="w-full h-full rounded-lg -z-50"
          src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 w-full h-auto lg:w-[80%] lg:h-[500px]">
        <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg">
          <h6>Pengadu</h6>
          <p>Anonymous</p>
        </section>
        <section className="w-full">
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
              <h6>Tanggal Aduan</h6>
              <p>G5102</p>
            </section>
            <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
              <h6>Lokasi</h6>
              <p>Kab Banten</p>
            </section>
          </div>
        </section>
        <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
          <h6>Alamat</h6>
          <p>Detail Aduan</p>
        </section>
        <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full h-full">
          <h6>Aduan</h6>
          <p>Detail Aduan</p>
        </section>
      </div>
    </>
  );
}

export default Content