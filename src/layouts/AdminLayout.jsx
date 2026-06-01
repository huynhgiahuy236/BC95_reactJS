import React from "react";

const AdminLayout = () => {
  return (
    <div>
      <div>
        <div className="relative h-[400px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
          <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Admin Portal
            </h1>
            <p className="text-gray-300">Application update and Status</p>
            <div className="shadow-lg rounded-lg overflow-hidden mx-3 md:mx-4">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                      Source
                    </th>
                    <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                      Toggle
                    </th>
                    <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                      URL
                    </th>
                    <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200">box</td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">
                      On
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      www.box.net
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200">FR</td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">
                      Off
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      www.frr.com
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                        Inactive
                      </span>
                    </td>
                  </tr>
                  <tr />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
