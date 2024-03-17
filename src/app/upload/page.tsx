"use client"

import { useState } from "react"

import { useSession } from "next-auth/react"
import { CldImage, CldUploadWidget } from "next-cloudinary"

import { Button } from "@/src/components"

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("")
  const { data: session } = useSession()
  if (!session || !session.user) return <div>You need to be logged in</div>
  return (
    <>
      {publicId && (
        <CldImage alt="default image" src={publicId} width={270} height={180} />
      )}
      <CldUploadWidget
        uploadPreset="o672zjpv"
        options={{
          sources: ["local", "camera", "google_drive", "dropbox"],
          maxFiles: 5,
          styles: {
            palette: {
              window: "#FFFFFF",
              windowBorder: "#90A0B3",
              tabIcon: "#0078FF",
              menuIcons: "#5A616A",
              textDark: "#000000",
              textLight: "#FFFFFF",
              link: "#0078FF",
              action: "#FF620C",
              inactiveTabIcon: "#0E2F5A",
              error: "#F44235",
              inProgress: "#0078FF",
              complete: "#20B832",
              sourceBg: "#E4EBF1",
            },
            fonts: {
              default: {
                active: true,
              },
            },
          },
        }}
        onSuccess={(result, widget) => {
          if (result.event !== "success") return
          const info = result.info as CloudinaryResult
          setPublicId(info.public_id)
          console.log(result)
        }}
      >
        {({ open }) => {
          return <Button onClick={() => open()}>Upload an Image</Button>
        }}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
