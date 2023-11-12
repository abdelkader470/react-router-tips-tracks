import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const LoginPage = () => {
  return (
    <div>
      <h2 className="text-center mb-3">Login To Contribute</h2>
      <form className=" max-w-sm mx-auto">
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
