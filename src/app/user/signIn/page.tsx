import SignIn from '../../../components/templates/user/signIn/SignIn';
// import dynamic from 'next/dynamic'
// const SignIn = dynamic(() => import("../../../components/templates/user/signIn/SignIn"), {
//     ssr: false,
// });
export default async function Page() {
    return (
        <>
            <SignIn />
        </>
    );
}