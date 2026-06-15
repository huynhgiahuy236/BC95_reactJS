import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomeLayout from "./layouts/HomeLayout";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { stores } from "./stores/store.js";

// cai dat query client o ngoai app.jsx de tat ca component hoac page deu co the dung duoc
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // thời gian dữ liệu được xem là "mới" (fresh) sau khi fetch thành công
      // trong khoảng thời gian này, nếu component nào gọi useQuery với cùng queryKey
      // thì sẽ trả về dữ liệu cũ trong cache mà không gọi API nữa
      staleTime: 5 * 60 * 1000, // 5 phut
      retry: 3, //so lan thu lai khi request that bai (mac dinh la 3)
    },
  },
});

const App = () => {
  return (
    <Provider store={stores}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<MovieListPage />}></Route>
              <Route path="movie" element={<MovieListPage />}></Route>
              <Route path="movie/:maPhim" element={<MovieDetailPage />}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};
export default App;
