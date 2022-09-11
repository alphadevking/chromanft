import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import { BsTwitter, BsFacebook, BsTelegram, BsGithub, BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <div>

        <div className='border-top border-bottom mt-2'></div>

        <Container>

            <Stack gap={0} style={{textAlign: `left`, fontSize: `14px`}} className='pb-1'>

                <div className='pt-2'>
                    <p className='p-2'>Copyright 2022 NFT Apocalypse - MultiChain Metaverse NFT Platform</p>
                </div>

                <div className='d-flex'>

                    <div className='p-1'>
                        <button className='btn-normal rounded-5 p-1 border-0'><BsTwitter className='m-2'></BsTwitter></button>
                    </div>

                    <div className='p-1'>
                        <button className='btn-normal rounded-5 p-1 border-0'><BsTelegram className='m-2'></BsTelegram></button>
                    </div>

                    <div className='p-1'>
                        <button className='btn-normal rounded-5 p-1 border-0'><BsGithub className='m-2'></BsGithub></button>
                    </div>

                    <div className='p-1'>
                        <button className='btn-normal rounded-5 p-1 border-0'><BsDiscord className='m-2'></BsDiscord></button>
                    </div>

                    <div className='p-1'>
                        <button className='btn-normal rounded-5 p-1 border-0'><BsFacebook className='m-2'></BsFacebook></button>
                    </div>

                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default Footer