<template>
  <div class="editor-container">
    <div ref="editorRef" style="height: 700px;"></div>
    <button class="save-button" @click="saveImage">Save & Back</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ImageEditor from 'tui-image-editor'
import 'tui-image-editor/dist/tui-image-editor.css'

export default {
  setup() {
    const editorRef = ref(null)
    const route = useRoute()
    const router = useRouter()
    let editorInstance = null

    const saveImage = () => {
      const dataUrl = editorInstance.toDataURL()
      localStorage.setItem('editedImage', dataUrl)
      router.push('/generate')
    }

    onMounted(() => {
      const imageUrl = route.query.image
      if (!imageUrl) {
        alert('Không có ảnh để chỉnh sửa!')
        return
      }

      const interval = setInterval(() => {
        const container = editorRef.value
        if (container) {
          clearInterval(interval)

          editorInstance = new ImageEditor(container, {
            includeUI: {
              loadImage: {
                path: imageUrl,
                name: 'AI_Image',
              },
              menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'filter'],
              initMenu: '',
              uiSize: {
                width: '100%',
                height: '700px',
              },
              menuBarPosition: 'bottom',
            },
            cssMaxWidth: 700,
            cssMaxHeight: 500,
            selectionStyle: {
              cornerSize: 20,
              rotatingPointOffset: 70,
            },
          })
        }
      }, 100)
    })

    return {
      editorRef,
      saveImage
    }
  }
}
</script>

<style scoped>
.editor-container {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  position: relative;
}

.save-button {
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
