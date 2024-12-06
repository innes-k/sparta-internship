import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const MainPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuthStore();

  const handleLogout = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      localStorage.removeItem("accessToken");
      alert("로그아웃 되었습니다.");
      logout();

      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Sparta Internship Task</h1>
        <p className="text-xl font-light drop-shadow-sm">
          간단한 회원가입, 로그인, 마이페이지 구현
        </p>
      </header>
      <section className="flex justify-center gap-6">
        {isLoggedIn ? (
          <>
            <div
              className="px-6 py-3 text-lg bg-white text-blue-500 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition duration-300"
              onClick={handleLogout}
            >
              로그아웃
            </div>
            <Link
              to="/mypage"
              className="px-6 py-3 text-lg bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-300"
            >
              마이페이지
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-6 py-3 text-lg bg-white text-blue-500 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition duration-300"
            >
              로그인
            </Link>

            <Link
              to="/signup"
              className="px-6 py-3 text-lg bg-white text-purple-500 rounded-lg shadow-lg hover:bg-purple-100 hover:shadow-xl transition duration-300"
            >
              회원가입
            </Link>
          </>
        )}
      </section>
    </div>
  );
};

export default MainPage;
