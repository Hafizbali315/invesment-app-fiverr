import ChatList from './../components/ChatListItem/index'

import Img3 from '../assets/MessagePage/Img3.svg'
import Img4 from '../assets/MessagePage/Img4.svg'
import Img5 from '../assets/MessagePage/Img5.svg'
import Img6 from '../assets/MessagePage/Img6.svg'
import ImgLarge from '../assets/MessagePage/ImgLarge.svg'
import photo from '../assets/MessagePage/photo.svg'
import send from '../assets/MessagePage/send.svg'

const MessagePage = () => {
	return (
		<div className="message_page container-fluid">
			<div className="row">
				<div className="col-lg-3">
					<div className="mt-3 search_msgs_users_card">
						<input type="text" placeholder="Search for messages or users…" />
					</div>

					<ChatList Img={Img3} name="John Doe" />
					<ChatList Img={Img4} name="Johnny Depp" />
					<ChatList Img={Img5} name="Johnny Depp" />
					<ChatList Img={Img6} name="Al Pacino" />
					<ChatList Img={Img3} name="John Doe" />
				</div>

				<div className="mt-5 col-lg-9 mt-lg-0">
					<div className="main_msgs_card">
						<div className="msgs_container">
							<div className="recieve_text_msgs">
								<div className="recieve_text_msg_card">Lorem ipsum sit amet dolor, lorem ipsum sit met dolor</div>
								<p className="mt-2 time">12:04</p>
							</div>

							<div className="send_text_msgs">
								<div className="send_text_msg_card">Lorem ipsum sit amet dolor, lorem ipsum sit met dolor</div>
							</div>

							<div className="send_text_msgs">
								<div className="send_text_msg_card2">Lorem ipsum sit amet dolor, lorem ipsum sit met dolor</div>
							</div>
							<p className=" time" style={{ textAlign: 'right' }}>
								12:04
							</p>

							<p className="mt-4 mb-5 text-center time">12 June 2020</p>

							<div className="recieve_text_msgs">
								<div className="recieve_text_msg_card">Lorem ipsum sit amet dolor, lorem ipsum sit met dolor</div>
								<p className="mt-2 time">12:04</p>
							</div>

							<div className="recieve_image">
								<img src={ImgLarge} alt="" />
							</div>
							<p className="mt-2 time" style={{ textAlign: 'right' }}>
								12:04
							</p>

							<div className="recieve_text_msgs">
								<div className="recieve_text_msg_card">Lorem ipsum sit amet dolor, lorem ipsum sit met dolor</div>
								<p className="mt-2 time">12:04</p>
							</div>
						</div>

						<div className="hr_line"></div>

						<div className="msg_type_send">
							<input type="text" placeholder="Type your message…" />

							<div className="icons">
								<div>
									<img src={photo} alt="some" />
								</div>
								<div className="send_icon_container">
									<img src={send} alt="some" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MessagePage
