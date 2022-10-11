import MultiStepForm from "./module/UserProfileForm/UserProfileFormSteps/UserMultiStepForm/UserMultiStepFormContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h4>react-hook-form + Material UI Stepper + validation (YUP) </h4>
      <MultiStepForm />
    </div>
  );
}
