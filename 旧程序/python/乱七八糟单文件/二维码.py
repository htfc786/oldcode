import qrcode

qr = qrcode.QRCode(version=1,	#范围是1到40,表示二维码的大小（最小值1,是个12x12的矩阵）
				box_size=10,	#每个点（方块）中的像素个数
				border=4,	#二维码距图像外围边框距离
				#error_correction=qrcode.constants.REEOR_CORRECT_L    #用于QR码的错误矫正（REEOR_CORRECT_L：大约7%或更少的错误被矫正；REEOR_CORRECT_M：大约15%或更少的错误被矫正；REEOR_CORRECT_H：大约30%或更少的错误被矫正）
				)
qr.add_data('<a>姓名：000</a><a>电话：1110000000</a>')
qr.make(fit=True)
img = qr.make_image(fill_color="black",back_color="white")
img.save(".jpg")
