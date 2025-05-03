import { useState, useEffect } from "react";

function ShippingInfo() {
  const [defaultAddress, setDefaultAddress] = useState({
    name: "Nguyên Văn A",
    phone: "0999999999",
    address: "Phường 4, Nguyễn Văn Bảo, Quận Gò Vấp, TP HCM",
  });

  // useEffect(() => {
  //   // Lấy dữ liệu tài khoản hiện tại từ localStorage
  //   const account = JSON.parse(localStorage.getItem("isAccount")) || {};

  //   // Tìm địa chỉ mặc định
  //   const addressMD = account.addressShip?.find((add) => add.isMacDinh);

  //   // Nếu tìm thấy địa chỉ mặc định, cập nhật state
  //   if (addressMD) {
  //     setDefaultAddress({
  //       name: addressMD.name,
  //       phone: addressMD.phone,
  //       address: addressMD.address,
  //     });
  //   }
  // }, []);

  return (
    <div>
      <h1 className="font-bold text-transparent text-xl">a</h1>
      <div>
        <div className="bg-white rounded-md mx-auto w-[92%] p-4 pb-8">
          <div className="flex justify-between py-2">
            <h1 className="text-secondary text-xl font-semibold ">
              Thông tin giao hàng
            </h1>
            <a href="" className="no-underline">
              <span className="text-blue-700 text-lg cursor-pointer">
                Thay đổi
              </span>
            </a>
          </div>
          <div className="font-bold text-lg flex opacity-50 pb-2">
            <span>{defaultAddress.name}</span>
            <div className="border mx-2"></div>
            <span>{defaultAddress.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/img/dinhvi.png" alt="" className="w-[30px]" />
            <span className="text-lg text-secondary leading-6">
              {defaultAddress.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;
