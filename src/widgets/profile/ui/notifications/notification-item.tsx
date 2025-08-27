import {Avatar} from "@/src/shared/ui/avatar";


export const NotificationItem = (notification:any) => {
    const date = new Date(notification.created_at);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formatted = `${day}.${month}, ${hours}:${minutes}`;

    return(
        <div className="flex flex-row gap-2 bg-pink rounded-3xl border-2 border-purple p-2 w-[700px] min-h-[200px]">
            <div>
                <Avatar width={70} height={70}/>
            </div>
            <div>
                <h1>Відповідь на ваше питання</h1>
                <h2><span className="font-bold">Дата повідомлення:</span> {formatted}</h2>
                <p>{notification.message.text}</p>
                {notification.type === 'chat_with_admins' ? (
                    <div>
                        <input type="text" placeholder="надіслати повідомлення" className="w-[500px] h-[40px] border-2 bg-pink border-purple rounded-xl p-2"/>
                        <button className="px-4 py-1 bg-purple text-white rounded-xl text-sm">
                            Надіслати
                        </button>
                    </div>

                ) :
                    (<div>
                        <button className="px-4 py-1 bg-purple text-white rounded-xl text-sm">
                            Отримати сертифікат
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}