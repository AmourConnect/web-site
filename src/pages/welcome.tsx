import 'tailwindcss/tailwind.css';
import Head1 from "@/components/Header/Head1";
import CardMatch from "@/components/Dashboard/Welcome/CardMatch";
import {useFetchRequestFriends} from '@/Hook/customsHook/RequestMatch/useFetchRequestFriends';
import { useUsersToMatch } from "@/Hook/customsHook/User/useUsersToMatch";
import AuthRedirect from '@/services/AuthRedirect';
import Loader1 from "@/components/Loading/Loader1";
import { Header1 } from '@/components/Header/Header1';
const WelcomePage = () => 
{
    const usersDto = useUsersToMatch();
    const { button_requestfriendsAdd, 
    show, 
    requestFriendsDto, 
    MessageApiR } = useFetchRequestFriends();

    return (
    <AuthRedirect
    LoadingComponent={<Loader1 />}
    isProtected={true}
    >
                <div className='bg-pink-400 min-h-screen'>
                <Head1/>
                <Header1/>
                <CardMatch
                    show={show}
                    requestFriendsDto={requestFriendsDto}
                    MessageApiR={MessageApiR}
                    usersDto={usersDto}
                    button_requestfriendsAdd={button_requestfriendsAdd}
                    />
                 </div>
    </AuthRedirect>
    );
}

export default WelcomePage