import FormElement from "./utils/FormElement";
import Validator from "./utils/Validator";

export default [
  new FormElement( {
  label : '個人情報の取り扱い',
  key : 'policy',
  type : 'checkbox',
  className: 'tr-policy',
  require : true,
  options : {
      data : [
          {
              label : '個人情報のお取り扱いに関する同意事項に同意する',
              value : '個人情報のお取り扱いに関する同意事項に同意する',
              isCheck: false
          },
      ]
    }
  } ),
  new FormElement( {
    label : 'お問い合わせ種別',
    key : 'select',
    type : 'checkbox',
    require : true,
    options : {
          data : [
              {
                  label : 'サービスについて',
                  value : 'サービスについて',
                  isCheck: false
              },
              {
                  label : '製品について',
                  value : '製品について',
                  isCheck: false
              },
              {
                  label : '採用について',
                  value : '採用について',
                  isCheck: false
              },
              {
                  label : 'その他',
                  value : 'その他',
                  isCheck: false
              }
          ]
      }
    } ),
    new FormElement( {
        label : '法人名',
        key : 'company',
        placeholder : 'groxi株式会社',
        type : 'text',
        require : false,
    } ),
    new FormElement( {
        label : '部署名',
        key : 'department',
        placeholder : 'システム開発部',
        type : 'text',
        require : false,
    } ),
    new FormElement( {
        label : '担当者名',
        key : 'name',
        placeholder : '',
        type : 'text',
        require : true,
    } ),
    new FormElement( {
        label : 'フリガナ',
        key : 'kana',
        placeholder : '',
        type : 'text',
        require : true,
    } ),
    new FormElement( {
        label : '電話番号',
        key : 'tel',
        placeholder : '',
        type : 'tel',
        validation : Validator.PAT_PHONENUMBER,
        require : true,
    } ),
    // new FormElement( {
    //     label : 'Fax番号',
    //     key : 'fax',
    //     placeholder : 'Fax番号をご入力ください',
    //     type : 'tel',
    //     validation : Validator.PAT_PHONENUMBER,
    //     // require : false,
    // } ),
    new FormElement( {
      label : 'メールアドレス',
      key : 'mail',
      placeholder : '',
      type : 'email',
      validation : Validator.PAT_EMAIL,
      require : true,
    } ),
    new FormElement( {
        label : 'お問合わせ内容',
        key : 'content',
        placeholder : '',
        type : 'textarea',
        require : true,
        options : {
            rows : 10,
            cols : 80
        }
    } ),

]
