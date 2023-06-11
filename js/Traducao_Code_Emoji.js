let Faces_Persons = document.querySelector('#EmojisContainer .Faces_Persons #Container')
let Animal_Enviroment = document.querySelector('#EmojisContainer .Animal_Enviroment #Container')
let Foods_Drinks = document.querySelector('#EmojisContainer .Foods_Drinks #Container')
let Flags = document.querySelector('#EmojisContainer .Flags #Container')


const EmojiData = [
    [
        `angry anguished astonished 
        blush clown_face 
        cold_face cold_sweat confounded 
        confused  cry 
        crying_cat_face disappointed disappointed_relieved 
        dizzy_face   
        drooling_face exploding_head expressionless 
        face_palm face_vomiting face_with_cowboy_hat 
        face_with_hand_over_mouth face_with_head_bandage face_with_monocle 
        face_with_raised_eyebrow face_with_rolling_eyes face_with_symbols_on_mouth 
        face_with_thermometer facepunch fearful first_quarter_moon_with_face 
        flushed   frowning full_moon_with_face  
        grimacing grin grinning hamster heart_eyes heart_eyes_cat  
        hot_face hugging_face hushed innocent joy joy_cat kissing 
        kissing_cat kissing_closed_eyes kissing_heart kissing_smiling_eyes 
        last_quarter_moon_with_face laughing  lying_face man-facepalming 
        mask massage money_mouth_face   nauseated_face 
        nerd_face neutral_face new_moon_with_face no_good no_mouth ok_woman 
        open_mouth  partying_face pensive persevere 
        person_with_pouting_face  pleading_face pouting_cat  rage 
        relaxed relieved robot_face scream scream_cat shushing_face 
        sleeping sleepy slightly_frowning_face slightly_smiling_face 
        smile smile_cat smiley smiley_cat smiling_face_with_3_hearts 
        smiling_imp smirk smirk_cat sneezing_face sob star-struck 
        stuck_out_tongue stuck_out_tongue_closed_eyes stuck_out_tongue_winking_eye 
        sun_with_face sunglasses sweat sweat_smile thinking_face tiger 
        tired_face triumph unamused  upside_down_face weary 
        white_frowning_face wind_blowing_face wink  woman-facepalming 
        woozy_face worried yum zany_face  zipper_mouth_face
        female-artist female-astronaut female-construction-worker female-cook female-detective female-doctor female-factory-worker female-farmer female-firefighter female-guard female-judge female-mechanic female-office-worker female-pilot female-police-officer female-scientist female-singer female-student female-teacher female-technologist female_bald female_curly_haired female_elf female_fairy female_genie female_mage female_red_haired female_sign female_superhero female_supervillain female_vampire female_white_haired female_zombie male-artist male-astronaut male-construction-worker male-cook male-detective male-doctor male-factory-worker male-farmer male-firefighter male-guard male-judge male-mechanic male-office-worker male-pilot male-police-officer male-scientist male-singer male-student male-teacher male-technologist male_bald male_curly_haired male_elf male_fairy male_genie male_mage male_red_haired male_sign male_superhero male_supervillain male_vampire male_white_haired male_zombie`
    ],
    [
        `bear cat
        cow cow2 dog
        dragon_face horse
        fox_face giraffe_face
        frog mouse
        lion_face monkey_face
        pig panda_face
        rabbit wolf
        unicorn_face tiger
        zebra_face baby_chick
        badger bear bird cactus
        cat2 camel bug blowfish boar bouquet
        chipmunk crab cricket crocodile deer
        dragon dromedary_camel duck eagle
        elephant fallen_leaf feet
        fish`
    ],
    [
        `canned_food shallow_pan_of_food stew
        bread  cheese_wedge   chestnut  cherries  coconut corn
        cookie   cucumber  fish_cake egg  eggplant doughnut fries
        fried_shrimp grapes green_salad ice_cream leafy_green  lemon peach`
    ],
    [
        "cm_su checkered_flag cn de es flag-ac flag-ad flag-ae flag-af flag-ag flag-ai flag-al flag-am flag-ao flag-aq flag-ar flag-as flag-at flag-au flag-aw flag-ax flag-az flag-ba flag-bb flag-bd flag-be flag-bf flag-bg flag-bh flag-bi flag-bj flag-bl flag-bm flag-bn flag-bo flag-bq flag-br flag-bs flag-bt flag-bv flag-bw flag-by flag-bz flag-ca flag-cc flag-cd flag-cf flag-cg flag-ch flag-ci flag-ck flag-cl flag-cm flag-co flag-cp flag-cr flag-cu flag-cv flag-cw flag-cx flag-cy flag-cz flag-dg flag-dj flag-dk flag-dm flag-do flag-dz flag-ea flag-ec flag-ee flag-eg flag-eh flag-england flag-er flag-et flag-eu flag-fi flag-fj flag-fk flag-fm flag-fo flag-ga flag-gd flag-ge flag-gf flag-gg flag-gh flag-gi flag-gl flag-gm flag-gn flag-gp flag-gq flag-gr flag-gs flag-gt flag-gu flag-gw flag-gy flag-hk flag-hm flag-hn flag-hr flag-ht flag-hu flag-ic flag-id flag-ie flag-il flag-im flag-in flag-io flag-iq flag-ir flag-is flag-je flag-jm flag-jo flag-ke flag-kg flag-kh flag-ki flag-km flag-kn flag-kp flag-kw flag-ky flag-kz flag-la flag-lb flag-lc flag-li flag-lk flag-lr flag-ls flag-lt flag-lu flag-lv flag-ly flag-ma flag-mc flag-md flag-me flag-mf flag-mg flag-mh flag-mk flag-ml flag-mm flag-mn flag-mo flag-mp flag-mq flag-mr flag-ms flag-mt flag-mu flag-mv flag-mw flag-mx flag-my flag-mz flag-na flag-nc flag-ne flag-nf flag-ng flag-ni flag-nl flag-no flag-np flag-nr flag-nu flag-nz flag-om flag-pa flag-pe flag-pf flag-pg flag-ph flag-pk flag-pl flag-pm flag-pn flag-pr flag-ps flag-pt flag-pw flag-py flag-qa flag-re flag-ro flag-rs flag-rw flag-sa flag-sb flag-sc flag-scotland flag-sd flag-se flag-sg flag-sh flag-si flag-sj flag-sk flag-sl flag-sm flag-sn flag-so flag-sr flag-ss flag-st flag-sv flag-sx flag-sy flag-sz flag-ta flag-tc flag-td flag-tf flag-tg flag-th flag-tj flag-tk flag-tl flag-tm flag-tn flag-to flag-tr flag-tt flag-tv flag-tw flag-tz flag-ua flag-ug flag-um flag-un flag-uy flag-uz flag-va flag-vc flag-ve flag-vg flag-vi flag-vn flag-vu flag-wales flag-wf flag-ws flag-xk flag-ye flag-yt flag-za flag-zm flag-zw flags fr gb it jp kr pirate_flag rainbow-flag ru triangular_flag_on_post us waving_black_flag waving_white_flag"
    ]
]

CreateEmojiTable()

function CreateEmojiTable() {
    for (const Group in EmojiData) {
        var Content = EmojiData[Group][0].replace(/\r?\n|\r/g, "").split(' ')

        Content.forEach(code => {
            if (code != '') {
                var Emoji_Button = `
                    <button class="Emoji_Button" onclick="AddEmojiToMessage('#${code}')">
                        <i id="Rando_emoj" class="em em-${code}"></i>
                    </button>
                `
                if (Group == 0) {
                    Faces_Persons.innerHTML += Emoji_Button
                } else if (Group == 1) {
                    Animal_Enviroment.innerHTML += Emoji_Button
                } else if (Group == 2) {
                    Foods_Drinks.innerHTML += Emoji_Button
                } else if (Group == 3) {
                    Flags.innerHTML += Emoji_Button
                }
            }
        })
    }
}


function Translate_Code_To_Emoji(texto) {
    var value_Text = texto.split(" ")
    var newArrayValue = []

    var data = EmojiData.join(' ')
    data = data.split(" ")

    value_Text.forEach(code => {
        if (code != '') {
            var RealCode = code.replace('#', "")
            if (data.indexOf(RealCode) > -1) {
                
                newArrayValue.push(`&nbsp; <i id="Rando_emoj" class="em em-${RealCode}"></i>`)
            } else {
                newArrayValue.push(RealCode)
            }

        }
    });

    var a = newArrayValue.join(' ');
    return a
}


function AddEmojiToMessage(Code) {
    MessageINP.value += ` ${Code} `
}

function DebugSaveChatData(Chat_Array) {
    ChatContainer.innerHTML = ""
    Chat_Array.forEach(mensagem => {
        ChatContainer.innerHTML += ChatMessageCardSender(mensagem)
        ChatContainer.innerHTML += ChatMessageCardAddressee(mensagem)
    })
    Mensagem_Font = document.querySelectorAll('#Mensagem')
}