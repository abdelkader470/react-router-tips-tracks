import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";

const ContributePage = () => {
  return (
    <div>
      <h2 className="text-center mb-3">Issue: 🐛 Bug Report</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Textarea />
        <Button>Submit new issue</Button>
      </form>
    </div>
  );
};

export default ContributePage;
