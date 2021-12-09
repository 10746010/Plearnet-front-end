<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-xl bg-black relative-position" :style="style">
        <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
          <div class="q-pa-md q-gutter-sm bg-white">          
            <q-form
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="true"
              @submit="onSubmit"
            >
              <q-select
                class="q-mb-sm bg-white text-black"
                color="teal"
                v-model="classOptions"
                :options="options"
                label="類別"
              />

              <q-input
                class="bg-white text-black"
                v-model="state.title"
                label="文章標題 *"
                hint="文章和內容"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-editor
                class="bg-white text-black"
                style="min-height: 450px !important"
                v-model="editor"           
                ref="editor"                
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
                  ['bgtoken','texttoken'],
                  ['hr', 'link', 'custom_btn'],
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
              >
                <template v-slot:bgtoken>
                  <q-btn-dropdown
                    dense
                    no-caps
                    ref="bgtoken"
                    no-wrap
                    unelevated
                    color="white"
                    text-color="black"
                    icon="fas fa-fill-drip"
                    size="sm"
                  >
                    <q-list dense>
                      <q-item
                        tag="label"
                        clickable
                        @click="color('backColor', highlight)"
                      >
                        <q-item-section>
                           <q-color v-model="highlight" no-header no-footer class="my-picker" />                         
                        </q-item-section>
                      </q-item>                      
                    </q-list>
                  </q-btn-dropdown>
                </template>     

                <template v-slot:texttoken>
                  <q-btn-dropdown
                    dense
                    no-caps
                    ref="texttoken"
                    no-wrap
                    unelevated
                    color="white"
                    text-color="black"
                    icon="fas fa-palette"
                    
                    size="sm"
                  >
                    <q-list dense>                     
                      <q-item
                        tag="label"
                        clickable
                        @click="color('foreColor', foreColor)"
                      >
                        <q-item-section>
                           <q-color v-model="foreColor" no-header no-footer class="my-picker" />                          
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </template>
              </q-editor>

              <q-separator size="10px" color="white"/>

              <q-card flat bordered>
                <q-card-section v-html="editor" />
              </q-card>

              <div class="row">
                <q-space />
                <q-btn
                  class="q-mt-sm"
                  color="primary"
                  label="送出"
                  type="submit"
                  @click="createNewNote"
                />
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
import { computed, reactive } from "vue";
// import { useRouter } from "vue-router";
<i class="fas fa-fill-drip"></i>
export default {
  name: "WhatsappLayout",
  components: {},
  data() {
    return {
      foreColor: "#000000",
      highlight: "#ffff00aa",
      editor: "",
      classOptions:"網頁",
      options:["網頁","擊劍"]
    };
  },
  methods: {
    color(cmd, name) {
      const edit = this.$refs.editor;
      this.$refs.bgtoken.hide();
      this.$refs.texttoken.hide();
      edit.caret.restore();
      edit.runCmd(cmd, name);
      edit.focus();
    },
  },

  setup() {
    const $q = useQuasar();
    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));  

    const state = reactive({
      title: "",
      content: "",
    });

    // const router = useRouter();

    const createNewNote = async () => {
      console.log("123");
      await axios.post("/topic/postNote", {
        title: "test6",
        content: "test",
        tagId: "2",
        author: "1",
      });

      // await router.push("/main");
    };

    return {
      style,
      state,    
      createNewNote,      
    };
  },
};
</script>

<style lang="sass" scoped>
</style>