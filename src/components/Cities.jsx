import { useState } from 'react'

function Cities() {

    let [CapitalCity, setCapitalCity] = useState("Capital City will appear here")

    const FranceSelected = () => {
        setCapitalCity("Paris")
    }

    const GermanySelected = () => {
        setCapitalCity("Berlin")
    }

    const ItalySelected = () => {
        setCapitalCity("Rome")
    }

    const GreeceSelected = () => {
        setCapitalCity("Athens")
    }

    const AustriaSelected = () => {
        setCapitalCity("Vienna")
    }

    const SpainSelected = () => {
        setCapitalCity("Madrid")
    }


    const PortugalSelected = () => {
        setCapitalCity("Lisbon")
    }


    return (
        <>
            <div className='border-2 border-black p-6 bg-lime-300'>
                <p className="text-2xl">{CapitalCity}</p>
            </div>

            <div>
                <ul className='text-3xl space-y-4'>
                    <li><button className='border-2 border-black p-3' onClick={FranceSelected}>France</button></li>
                    <li><button className='border-2 border-black p-3' onClick={GermanySelected}>Germany</button></li>
                    <li><button className='border-2 border-black p-3' onClick={ItalySelected}>Italy</button></li>
                    <li><button className='border-2 border-black p-3' onClick={GreeceSelected}>Greece</button></li>
                    <li><button className='border-2 border-black p-3' onClick={AustriaSelected}>Austria</button></li>
                    <li><button className='border-2 border-black p-3' onClick={SpainSelected}>Spain</button></li>
                    <li><button className='border-2 border-black p-3' onClick={PortugalSelected}>Portugal</button></li>
                </ul>
            </div>
        </>
    )
}



export default Cities