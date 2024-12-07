import { useAuthStore } from "../store/authStore";
import ButtonLink from "../commons/MainPageButton";

const MainPage = () => {
  const { isLoggedIn, logout } = useAuthStore();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      localStorage.removeItem("accessToken");
      alert("로그아웃 되었습니다.");
      logout();
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
            <ButtonLink to="/" onClick={handleLogout} className="text-blue-500 hover:bg-blue-100">
              로그아웃
            </ButtonLink>
            <ButtonLink to="/mypage" className="text-gray-800 hover:bg-gray-200">
              마이페이지
            </ButtonLink>
          </>
        ) : (
          <>
            <ButtonLink to="/login" className="text-blue-500 hover:bg-blue-100">
              로그인
            </ButtonLink>
            <ButtonLink to="/signup" className="text-purple-500 hover:bg-purple-100">
              회원가입
            </ButtonLink>
          </>
        )}
      </section>
    </div>
  );
};

export default MainPage;
