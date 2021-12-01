import './style.scss'

const ChatList = ({ Img, name }) => {
	return (
		<div className="mt-3 chat_list_card">
			<div className="chat_list_img me-3">
				<img src={Img} alt="Img1" />
			</div>
			<div className="chat_list_card_info">
				<p className="name">{name}</p>
				<p className="new_msg">lorem ipsum , consectet... </p>
			</div>
			<span className="chat_list_date">17 July 2021</span>
		</div>
	)
}

export default ChatList
