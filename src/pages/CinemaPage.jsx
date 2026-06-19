import React, { useState } from "react";
import { useCumRapTheoHeThong, useHeThongRap } from "../hooks/useCinema";
import LoadingSpinner from "../components/LoadingSpinner";

const CinemaPage = () => {
  const [selectedCinema, setSelectedCinema] = useState();

  const { data: listHeThongRap, isLoading: isLoadingHeThongRap } =
    useHeThongRap();

  const { data: listCumRapHeThong, isLoading: isLoadingCumRapHeThong } =
    useCumRapTheoHeThong(selectedCinema);

  const handleSelectedCinema = (maHeThongRap) => {
    setSelectedCinema(maHeThongRap);
  };
  console.log("selectedCinema =", selectedCinema);
  const selectedCinemaInfo = listHeThongRap?.find(
    (item) => item.maHeThongRap === selectedCinema,
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Hệ thống <span className="text-yellow-400">Rạp chiếu</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Chọn chuỗi rạp để xem danh sách địa điểm
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {isLoadingHeThongRap && <LoadingSpinner />}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-72 flex-shrink-0">
            <h2 className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-medium">
              Chuỗi rạp
            </h2>

            <div className="space-y-2">
              {listHeThongRap?.map((heThongRap) => (
                <button
                  key={heThongRap.maHeThongRap}
                  onClick={() => handleSelectedCinema(heThongRap.maHeThongRap)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer
                    ${
                      selectedCinema === heThongRap.maHeThongRap
                        ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400"
                        : "bg-gray-800 border border-gray-700 text-white"
                    }`}
                >
                  <img
                    src={heThongRap.logo}
                    alt={heThongRap.tenHeThongRap}
                    className="w-10 h-10 object-contain rounded-lg bg-white p-1"
                  />

                  <span className="font-medium text-sm text-left">
                    {heThongRap.tenHeThongRap}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {!selectedCinema && (
              <div className="text-center text-gray-400 mt-20">
                Vui lòng chọn một hệ thống rạp
              </div>
            )}

            {selectedCinemaInfo && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={selectedCinemaInfo.logo}
                    alt={selectedCinemaInfo.tenHeThongRap}
                    className="w-12 h-12 object-contain bg-white rounded-xl p-1"
                  />

                  <h2 className="text-2xl font-bold text-yellow-400">
                    {selectedCinemaInfo.tenHeThongRap}
                  </h2>

                  <span className="text-gray-500 text-sm">
                    ({listCumRapHeThong?.length || 0} cụm rạp)
                  </span>
                </div>

                {isLoadingCumRapHeThong ? (
                  <LoadingSpinner />
                ) : (
                  <div className="space-y-4">
                    {listCumRapHeThong?.map((cumRap) => (
                      <div
                        key={cumRap.maCumRap}
                        className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-yellow-400/40 transition-colors"
                      >
                        <h3 className="text-white font-semibold text-lg">
                          hnn
                        </h3>

                        <p className="text-gray-400 text-sm mt-2">📍 nmnn</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaPage;
