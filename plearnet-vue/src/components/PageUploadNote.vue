<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="
    z-index: 0;">
      <div class="q-pa-xl bg-grey-4 relative-position" :style="style">
        <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
          <div class="q-pa-md q-gutter-sm">
            <q-form
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="true"
              @submit="onSubmit"
            >
            <q-select class="q-mb-sm" color="teal" filled v-model="model" :options="options" label="類別"/>
              <q-input
                filled
                v-model="state.title"
                label="Your title *"
                hint="title and content"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-editor
                class="bg-grey-4"
                style="min-height:650px!important"
                v-model="state.content"

                :dense="$q.screen.lt.md"
                :toolbar="[
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify'],
                    },
                  ],
                  [
                    'bold',
                    'italic',
                    'strike',
                    'underline',
                    'subscript',
                    'superscript',
                  ],
                  ['token', 'hr', 'link', 'custom_btn'],
                  [
                    {
                      label: $q.lang.editor.formatting,
                      icon: $q.iconSet.editor.formatting,
                      list: 'no-icons',
                      options: [
                        'p',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'code',
                      ],
                    },
                    {
                      label: $q.lang.editor.fontSize,
                      icon: $q.iconSet.editor.fontSize,
                      fixedLabel: true,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7',
                      ],
                    },
                    {
                      label: $q.lang.editor.defaultFont,
                      icon: $q.iconSet.editor.font,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'default_font',
                        'arial',
                        'arial_black',
                        'comic_sans',
                        'courier_new',
                        'impact',
                        'lucida_grande',
                        'times_new_roman',
                        'verdana',
                      ],
                    },
                    'removeFormat',
                  ],
                  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                  ['viewsource', 'fullscreen'],
                ]"
                :fonts="{
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana',
                }"
              />
              <div class="row">
                <q-space />
               <q-btn class="q-mt-sm" color="primary" label="送出" type="submit"/>

              </div>
            </q-form>
          </div>
        </q-layout>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import axios from "axios";
import { useQuasar } from "quasar";
import { ref, computed,reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "WhatsappLayout",
  components: {},
  setup() {
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    const editorStyle = computed(() => ({
      height: $q.screen.height - 330 + "px",
    }));

    const state = reactive({
      title: "",
      content: "",

    });

    const router = useRouter();

    const createNewNote = async () => {
      await axios.post("/topic/postNote", {
        title:state.title,
        contetnt:state.content
        // username: state.username,
        // account: state.account,
        // password: state.password,
        // password_confirm: state.password_confirm,
        // email: state.email,
      });

      await router.push("/main");
    };

    return {
      style,
      editorStyle,
      qeditor: ref(
        "<pre>Check out the two different types of dropdowns" +
          ' in each of the "Align" buttons.</pre> '
      ),
      createNewNote
    };
  },
};
</script>

<style lang="sass">

</style>