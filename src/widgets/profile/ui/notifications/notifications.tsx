import notifications from "@/public/main-icons/notifications.svg"
import Image from "next/image";
import {NotificationItem} from "@/src/widgets/profile/ui/notifications/notification-item";
import {useNotifications} from "@/src/entities/profile/hook/notification-hook";
import ClipLoader from "react-spinners/ClipLoader";

export const Notifications = () => {
    const {data, loading, error} = useNotifications();
    console.log(data?.data.notifications )
    if( data?.data.notifications.length === 0){
        return(<></>)
    }

    return(
        <div className="flex flex-col max-h-[650px] w-[840px] bg-purplelight rounded-3xl border-2 border-purple p-2">
            <div className="flex flex-row items-center gap-2 p-2">
                <Image alt={`notifications`} width={50} height={50} src={notifications}/>
                <span className="flex gap-1">Сповіщення</span>
            </div>
            <div className="flex flex-col gap-2 p-2 overflow-y-auto items-center h-[500px]">
                {
                    loading ? (<div className="flex justify-center items-center self-center"><ClipLoader color="#65558F"/></div>) :
                    error ? (<div>Error</div>) :
                        (
                    <div className="flex flex-col gap-2">
                        {data?.data.notifications.map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </div>)
                }

            </div>
        </div>
     )
}