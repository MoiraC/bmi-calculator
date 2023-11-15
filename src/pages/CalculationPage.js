import CalculationHistory from "../components/bmi/CalculationHistory";
import Calculator from "../components/bmi/Calculator";

const CalculationPage = () => {

    return (
        <>
            <div className="flex justify-center gap-4">
                <Calculator />
                <CalculationHistory />
            </div>
        </>
    )
};

export default CalculationPage;