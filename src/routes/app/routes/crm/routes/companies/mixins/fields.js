export default {
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false,
        },
        {
          type: 'input',
          column: 'sync',
          text: 'Sync Last Updates/ Sync ID',
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'sync',

          multiedit: false,
        },

        {
          type: 'input',
          column: 'name',
          text: this.$t('fields.name'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'name',
          create: false,
          multiedit: false,
        },

        {
          type: 'input',
          column: 'loan_duration',
          text: 'loan duration',
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'loan_duration',
          table: true,
          create: false,
          multiedit: false,
          required: false,
        },

        {
          type: 'input',
          column: 'work_duration',
          text: 'work_duration',
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          create: false,
          multiedit: false,
          required: false,
        },

        {
          type: 'input',
          column: 'credit_limit',
          text: 'credit limit',
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          create: false,
          multiedit: false,
          required: false,
        },

        {
          type: 'input',
          column: 'chosen_product_id',
          text: 'chosen proudct',
          grid: 'xs12 sm6 md4 lg6 xl3',
          name: 'chosen_product_id',
          create: false,
          required: false,
        },
        {
          type: 'input',
          column: 'income_source',
          text: 'income_source',
          name: 'income_source',
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: true,
          create: false,
          multiedit: false,
          required: false,
        },

        {
          type: 'input',
          column: 'loan_amount',
          text: 'loan amount',
          grid: 'xs12 sm6 md4 lg6 xl3',
          name: 'loan_amount',
          create: false,
          required: false,
        },

        {
          type: 'input',
          column: 'email',
          text: 'Email',
          name: 'email',
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: true,
          create: false,
          multiedit: false,
          required: false,
        },

        {
          type: 'input',
          column: 'mobile',
          text: 'mobile',
          name: 'mobile',
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: true,
          create: false,
          multiedit: false,
          required: false,
        },
        {
          type: 'input',
          column: 'age',
          text: this.$t('fields.age'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          create: false,
          multiedit: false,
          required: false,
        },
      ]
    },
  },
}
