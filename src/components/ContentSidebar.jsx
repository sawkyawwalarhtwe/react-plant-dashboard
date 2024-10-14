import { Card, Flex, Image, Typography } from 'antd'
import React from 'react'
import plant from   '../assets/plant01.png'
const ContentSidebar = () => {
  return (
    <div>
        <Card className='card'>
            <Flex vertical gap='larger'>
                <Typography.Title level={4} strong>
                    Today<br/>
                    5 orders
                </Typography.Title>
                <Typography.Title level={4} strong>
                    This morning<br/>
                    240 orders
                </Typography.Title>
            </Flex>
            <Image src={plant} alt='plant' style={{position:'absolute', bottom:-20, left:90, height:'250px', width:'auto'}}/>
        </Card>
    </div>
  )
}

export default ContentSidebar