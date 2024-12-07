import ContentBox from "../components/ContentBox";
import SignUpContent from "../components/SignUpContent";

const SignupPage: React.FC = () => {
  // 테스트 id, pw : christmasTest

  return (
    <ContentBox title="회원가입">
      <SignUpContent />
    </ContentBox>
  );
};

export default SignupPage;
