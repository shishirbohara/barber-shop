

export default function AppointmentForm() {
    return (
        <div className="bg-[#F5EEE7] py-10 px-20">
            <h1 className="text-2xl font-bold pb-10">Book An Appointment</h1>
            <form className="flex flex-col space-y-5 text-black">

                <input type="text" placeholder="Name" className="bg-transparent  px-2 py-1 border-b placeholder-black border-black outline-none"
                />
                <input type="text" placeholder="Email" className="bg-transparent px-2 py-1 placeholder-black border-b border-black outline-none" />
                <input type="text" placeholder="Phone" className="bg-transparent px-2 py-1 border-b placeholder-black border-black outline-none" />
                <input type="date" className="bg-transparent px-2 py-1 border-b outline-none placeholder-black border-black" />
                <input type="time" className="bg-transparent px-2 py-1 border-b outline-none placeholder-black border-black" />
                <button className="bg-[#91765A]/90 hover:bg-[#91765A] hover-transition text-white py-4 font-bold">Book Now</button>
            </form>
        </div>
    )
}
