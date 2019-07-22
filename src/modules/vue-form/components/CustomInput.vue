<template>
	<div :class="`custom-input custom-input-${formElement.type}`">
		<label v-if="'select' === formElement.type" :for="`custom-input-${formElement.key}`">
			<select
				:name="formElement.key"
				:id="`custom-input-${formElement.key}`"
				:value="value.value"
				:class="`${(null === value.value || '' === value.value) ? 'is-default' : null}`"
				@change="updateValue">
				<option data-pt-off v-for="(option, index) in formElement.getOptions()" :value="option.value" :disabled="null===option.value" :key="`{_uid}-option-${index}`">
					{{ option.label }}
				</option>
			</select>
		</label>
		<label v-else-if="'textarea' === formElement.type" :for="`custom-input-${formElement.key}`">
			<textarea
				:id="`custom-input-${formElement.key}`"
				:cols="formElement.getCols()"
				:rows="formElement.getRows()"
				:placeholder="formElement.placeholder"
				:value="value.value"
				wrap="hard"
				@blur="updateValue"
				@input="updateValue"
				data-pt-off></textarea>
		</label>
		<span v-else-if="'radio' === formElement.type">
			<label v-for="(radio, index) in formElement.getRadios()" :key="`${formElement.key}-radio-label-${index}`" :for="`${formElement.key}-radio-${index}`" >
				<input
					:id="`${formElement.key}-radio-${index}`"
					:type="formElement.type"
					:name="formElement.key"
					@change="updateValue"
					:value="radio.value"
					data-pt-off>
				<span class="radio-wrap">
					<span class="radio-ui"></span>
					<span class="radio-label">{{ radio.label }}</span>
				</span>

			</label>

		</span>
		<span v-else-if="'checkbox' === formElement.type">
			<label v-for="(checkbox, index) in formElement.getCheckBoxes()" :key="`${formElement.key}-checkbox-label-${index}`" :for="`${formElement.key}-checkbox-${index}`" :class="{isCheck: checkbox.isCheck}">
				<input
					:id="`${formElement.key}-checkbox-${index}`"
					:type="formElement.type"
					:name="formElement.key"
					@change="updateValue"
					:data-order-id="index"
					:value="checkbox.value"
					data-pt-off>
				<span class="checkbox-wrap">
					<span class="checkbox-ui"></span>
					<span class="checkbox-label">{{ checkbox.label }}</span>
				</span>
			</label>
		</span>

		<span v-else-if="'policy' === formElement.type">
			<label v-for="(checkbox, index) in formElement.getCheckBoxes()" :key="`${formElement.key}-checkbox-label-${index}`" :for="`${formElement.key}-checkbox-${index}`" :class="{isCheck: checkbox.isCheck}">
				<input
					:id="`${formElement.key}-checkbox-${index}`"
					:type="formElement.type"
					:name="formElement.key"
					@change="updateValue"
					:data-order-id="index"
					:value="checkbox.value"
					data-pt-off>
				<span class="checkbox-wrap">
					<span class="checkbox-ui"></span>
					<span class="checkbox-label">{{ checkbox.label }}</span>
				</span>
			</label>
		</span>

		<label v-else :for="`custom-input-${formElement.key}`">
			<input
				:id="`custom-input-${formElement.key}`"
				:type="formElement.type"
				:name="formElement.key"
				@blur="updateValue"
				@input="updateValue"
				:value="value.value"
				:placeholder="formElement.placeholder"
				data-pt-off>

		</label>
		<!-- <a v-show="formElement.key == 'policy'" href="/policy/" target="_blank" class="policy-link" data-pt="link">プライバシーポリシーはこちら</a> -->
		<p v-if="'' !== errorMsg" class="form-error-msg">{{ errorMsg }}</p>

	</div>

</template>

<script>
    import FormElement from '../utils/FormElement';
    import Validator from '../utils/Validator';

    export default {
        name : "CustomInput",
        props : {
            value : {
                default : ''
            },
            formElement : {
                type : FormElement,
                require : true,
            }
        },
        created() {
            this.formValue.label = this.formElement.label;
        },
				updated() {

				},
        methods : {
            checkTheValue( value ) {
                let isValid = value === '' ? true : (null !== this.formElement.validation ? Validator.pattern( value, this.formElement.validation ) : true),
                    isEmpty = this.formElement.require ? Validator.isEmpty( value ) : true;

								if(this.formElement.type === 'checkbox') {
									// チェックボックスの場合配列管理にする。
									if(this.formValue.value == "") this.formValue.value = [];
									if (this.formValue.value.indexOf(value) == -1) {
										// なかったら追加
										this.formValue.value.push(value);
									} else {
										// チェックを外した場合に削除
										for(let i = 0; i < this.formValue.value.length; i++) {
											if(this.formValue.value[i] === value) this.formValue.value.splice(i, 1);
											if(this.formValue.value.length === 0) this.formValue.value = "";
										}
									}
								} else {
									this.formValue.value = value;
								}
                this.formValue.key = this.formElement.key;
                this.formValue.isValid = isValid && isEmpty;

                if ( !isEmpty ) {
                    this.errorMsg = this.formElement.errorMsg[ 0 ];
                } else if ( !isValid ) {
                    this.errorMsg = this.formElement.errorMsg[ 1 ];
                } else {
                    this.errorMsg = '';
                }
            },
            updateValue( e ) {
                this.checkTheValue( e.target.value );
								if(this.formElement.type === 'checkbox') {
									this.updateCheck(e.target.dataset['orderId'])
								}

                this.$emit( 'blur', this.formValue );
                this.$emit( 'input', this.formValue );
                this.$emit( 'change', this.formValue );
            },
						updateCheck( index ) {
							let data = this.formElement.options.data[index];
							data.isCheck = !data.isCheck;

							// // orderID_0:プロジェクト／ワークショップのご相談
							// // orderID_1:WDAに関するお問い合わせ
							// // orderID_2:その他のお問い合わせ
							// if(index == 0) {
							// 	if(data.isCheck) {
							// 		document.getElementById('custom-input-content').placeholder = '実施期間、ご予算、人数などのイメージを教えてください'
							// 	} else {
							// 		document.getElementById('custom-input-content').placeholder = ''
							// 	}
							// }
						}
        },
        data() {
            return {
                errorMsg : '',
                formValue : {
                    label : '',
                    value : '',
                    key : '',
                    isValid : false
                }
            }
        }
    }
</script>

<style scoped>

</style>
