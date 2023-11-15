import React, { useState } from 'react'

function Calculator() {

    const [calculation, setCalculation] = useState();
    const [result, setResult] = useState();

    const calculator = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const height = formData.get("height");
        const weight = formData.get("weight");
        if (height <= 0 || weight <= 0) {
            setResult("Hatalı değer girdiniz.")
            return
        }
        const meter = height / 100;
        const calculate = weight / Math.pow(meter, 2);

        if (calculate <= 18.5)
            setResult("Düşük kilolu")
        else if (calculate > 18.5 && calculate <= 24.9)
            setResult("Normal kiloda")
        else if (calculate > 24.9 && calculate <= 29.9)
            setResult("Fazla kilolu")
        else
            setResult("Obez")
        setCalculation(calculate);
    }


    return (
        <div className='flex flex-col items-center'>
            <form onSubmit={calculator} className='w-96'>
                <div className="mb-6">
                    <label
                        htmlFor="height"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Boyunuz
                    </label>
                    <input
                        id="height"
                        name='height'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="weight"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Kilonuz
                    </label>
                    <input
                        id="weight"
                        name='weight'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="cinsiyet"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Cinsiyet seçiniz
                    </label>
                    <select
                        id="cinsiyet"
                        defaultValue={""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="" disabled hidden></option>
                        <option value="Kadın">Kadın</option>
                        <option value="Erkek">Erkek</option>

                    </select>
                </div>
                <button
                    type="submit"
                    className="text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-800 dark:hover:bg-purple-900 dark:focus:ring-purple-800"
                >
                    Hesapla
                </button>
            </form>
            {calculation && result && <div
                className="block p-6 mt-8 w-[480px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {result}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {calculation.toFixed(1)}
                </p>
            </div>}
        </div>
    )
}

export default Calculator