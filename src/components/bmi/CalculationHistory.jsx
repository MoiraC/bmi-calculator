import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCalculationByUser } from '../../features/user/calculationSlice';
import ClearIcon from '@mui/icons-material/Clear';

function CalculationHistory() {

    const dispatch = useDispatch();
    //Reduxtan tüm calculation datalarını aldım
    const calculationData = useSelector((state) => state.calculation);
    ////Reduxtan User datasını aldım
    const userData = useSelector((state) => state.user);
    //Şuanki User ile aynı id ye sahip bütün calculationları filtreledim
    const userCalculations = calculationData.calculations.filter(calc => calc.userId === userData.currentUserId)

    return (
        <>
            {/* Şuanki kullanıcıya ait calculation yoksa gizledim. */}
            {userCalculations.length > 0 &&
                <div className='flex flex-col items-center justify-around h-[70vh]'>
                    <div className='flex flex-col items-center'>
                        <section className="bg-gray-50 dark:bg-gray-900 w-96">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <div className='flex justify-between'>
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            VKI Geçmişi
                                        </h1>
                                        <ClearIcon
                                            sx={{ color: "white", ":hover": { color: "gray" } }}
                                            className="h-8 w-auto cursor-pointer"
                                            alt="Clear"
                                            onClick={() => dispatch(removeCalculationByUser(userData.currentUserId))}
                                        />
                                    </div>
                                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                                        {/* Her bir calculation için bir List itemı oluşturdum ve içinde datalarını gösterdim */}
                                        {
                                            userCalculations.map(calculation =>
                                                <li className="py-3 sm:py-4 w-full flex justify-between">
                                                    <div>
                                                        <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                            VKI: {calculation.value.toFixed(1)}
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        {calculation.date.toLocaleDateString("en-US")}
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>

    )
}

export default CalculationHistory