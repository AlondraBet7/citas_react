
export default function Error({mensaje}) {
  return (
    <>
    <div className="bg-red-800 text-white text-center font-bold shadow-md rounded-lg py-5 px-5 mb-10 uppercase">
                <p>
                    {mensaje}
                </p>
                </div>
    </>
  )
}
