import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <main className="flex justify-center font-bold text-4xl my-12">
        <div>Sparta Internship Task</div>
      </main>
      <section className="flex flex-col items-center gap-4 text-2xl">
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </section>
    </>
  );
};

export default MainPage;
