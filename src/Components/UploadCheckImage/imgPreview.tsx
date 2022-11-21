import { PixelCrop } from 'react-image-crop'
import { canvasPreview } from "./CanvasPreview";

let previewUrl = ''

function toBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob(resolve)
  })
}

// Returns an image source set to state and pass
export async function imgPreview(
  image: HTMLImageElement,
  crop: PixelCrop,
  rotate = 0,
) {
  const canvas = document.createElement('canvas')
  canvasPreview(image, canvas, crop,rotate)

  const blob = await toBlob(canvas)

  if (!blob) {
    console.error('Failed to create blob')
    return ''
  }

  if (previewUrl) {
    URL.revokeObjectURL(previewUrl)
  }

  previewUrl = URL.createObjectURL(blob)
  return previewUrl
}