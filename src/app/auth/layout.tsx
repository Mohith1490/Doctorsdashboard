
const AuthLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5]">
            {children}
        </div>
    )
}

export default AuthLayout;