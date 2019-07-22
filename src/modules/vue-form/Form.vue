<template>
	<div id="vue-form">

		<transition name="fade">

			<form v-if="'input' === mode" :key="'input'" id="form-input" class="form" @submit.prevent="confirm">
				<div class="s-message">
					<p class="message">下記のフォーム内容をご記入いただき、<a class="link" href="#" target="_blank">個人情報保護方針</a>をご確認の上、送信してください。＊は必須項目です。<br />内容確認後に、担当者よりご連絡いたします。</p>
				</div>
				<div class="inner">
					<div class="progress">
						<ul class="progress-list">
							<li class="item current">
								<span class="no">01</span>
								<span class="text">入力</span>
							</li>
							<li class="item">
								<span class="no">02</span>
								<span class="text">確認</span>
							</li>
							<li class="item">
								<span class="no">03</span>
								<span class="text">完了</span>
							</li>
						</ul>
					</div>
					<div class="right-area">
						<table class="table-group white">
							<tr class="table-list" v-for="(form, index) in formList" :key="`${mode}-${form.key}`">
								<th v-if="form.key !== 'policy'">{{ form.label }} <span class="form-require-label" v-if="form.require">＊</span></th>
								<td>
									<CustomInput :formElement="form" v-model="formValues[index]" ref="CustomInput"></CustomInput>
								</td>
							</tr>
						</table>

						<button type="submit" class="btn btn-more r-fonts white rect has-border">
							<span>確認画面へ</span>
						</button>
					</div>
				</div>
			</form>

			<form v-if="'confirm' === mode" :key="'confirm'" id="form-confirm" class="form" @submit.prevent="send">
				<div class="inner">
					<div class="progress">
						<ul class="progress-list">
							<li class="item">
								<span class="no">01</span>
								<span class="text">入力</span>
							</li>
							<li class="item current">
								<span class="no">02</span>
								<span class="text">確認</span>
							</li>
							<li class="item">
								<span class="no">03</span>
								<span class="text">完了</span>
							</li>
						</ul>
					</div>
					<div class="right-area">
						<table class="table-group white">
							<tr class="table-list" v-for="formValue in formValues" :key="formValue.key">
								<th>{{ formValue.label }}</th>
								<td>
									<pre>{{ formValue.value }}</pre>
								</td>
							</tr>
						</table>

						<button type="submit" class="btn btn-more r-fonts white rect has-border has-arrow">
							<span>送信する</span>
						</button>
						<button type="button" @click="back" class="btn btn-more r-fonts white rect has-border back">
							<span>戻る</span>
						</button>
					</div>
				</div>


			</form>

			<div v-if="'complete' === mode" :key="'complete'"  class="form" id="form-complete">
				<div class="inner">
					<div class="progress">
						<ul class="progress-list">
							<li class="item">
								<span class="no">01</span>
								<span class="text">入力</span>
							</li>
							<li class="item">
								<span class="no">02</span>
								<span class="text">確認</span>
							</li>
							<li class="item current">
								<span class="no">03</span>
								<span class="text">完了</span>
							</li>
						</ul>
					</div>
					<div class="block-body">
						<h2 class="title">お問い合わせいただき<br class="u-sp-only">ありがとうございます。</h2>
						<p class="text">内容を確認の上、担当者よりご連絡をさせていただきます。<br class="u-pc-only">今しばらくお待ちくださいますようよろしくお願い申し上げます。</p>
						<a class="p-btn btn" href="/" data-pt="arrow"><span class="btn__text">トップへ</span></a>
					</div>
				</div>

			</div>
		</transition>
	</div>
</template>

<script>
		import { mapState } from 'vuex';
    import axios from 'axios';
    import CustomInput from './components/CustomInput.vue';
    import config from './config';


    export default {
        name : "Form",
				computed: {
					...mapState('window', [ 'isSP' ]),
				},
        created() {
						this.resize();
            this.formList = config;
            this.formList.forEach( ( list, index ) => {
                this.formValues[ index ] = {
                    label : list.label,
                    value : '',
                    key : list.key,
                    // isValid : !list.require && null === list.validation
										isValid : !list.require
                };
            } );
        },updated() {
					this.resize();
				},
				mounted() {
					axios( {
						method: 'post',
						url : '/api/phpForm/_inc_/utils/getCSRFToken.php',
						headers : { 'Content-Type' : 'application/x-www-form-urlencoded' }
					}).then( response => {
						window.token = response.data;
					}).catch( error => {
						console.log(error)
					});
				},
        methods : {
						resize() {
              this.$emit('resize');
            },
						toTop() {
							let top = document.querySelector('.s-contact').getBoundingClientRect().top + document.documentElement.scrollTop || document.body.scrollTop;
							let offset = this.isPC ? 300 : 120;
							window.scrollTo(0,top  - offset)
							// window.scrollTo(0,top  - 120)
						},

            confirm() {
								let checkboxIndex = [];
                this.validAll = true;
                this.$refs[ 'CustomInput' ].forEach( ( CustomInput, index ) => {
										let value = this.formValues[ index ].value;
										if(Array.isArray(value)) checkboxIndex.push(index);
                    CustomInput.checkTheValue( value );
                    if ( !this.formValues[ index ].isValid ) {
                        this.validAll = false;
                    }
                } );

                if ( this.validAll ) {
									// 確認画面に遷移する前に、チェックボックスの項目を文字列に変換する。
									for(let i = 0; i < checkboxIndex.length; i++) {
										let num = checkboxIndex[i];
										let value = this.formValues[ num ].value;
										value = value.join(', ').slice( 0, -2 );
										// console.log(value);
										this.formValues[ num ].value = value;
									}
                    this.mode = 'confirm';
                }
								this.toTop();
            },
            back() {
                this.mode = 'input';
								this.toTop();
            },
            send() {
                this.mode = 'complete';
								this.toTop();

                let mailAddress = '';

                // search mail address
                this.formValues.some( formValue => {
                    if ( 'mail' === formValue.key ) {
                        mailAddress = formValue.value;
                        return true;
                    }
                } );

                let params = new URLSearchParams();
                params.append( 'csrf_token', window.token );
                params.append( 'mail', mailAddress );
                params.append( 'body', JSON.stringify( this.formValues ) );

                axios.defaults.headers[ 'X-CSRF-TOKEN' ] = window.token;
                axios( {
                    method : 'post',
                    url : '/api/phpForm/mail.php',
                    headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
                    data : params
                } ).then( () => {
                    // console.log( window.token )
										// window.token = '';
										window.token = null;
                } ).catch( error => {
                    console.log( error )
                } );
            }
        },
        data() {
            return {
                formList : [],
                formValues : [],
                validAll : true,
                mode : 'input'
            }
        },
        components : {
            CustomInput
        }
    }
</script>

<style lang="sass">
.fade-enter-active
  transition: all 1.2s .8s ease-in
.fade-leave-active
  transition: all .8s ease-out

.fade-enter, .fade-leave-to
  opacity: 0


+media-mobile



</style>
