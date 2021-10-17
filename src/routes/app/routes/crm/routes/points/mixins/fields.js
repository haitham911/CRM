export default {
  computed: {
    //    $columns = ['id', 'package_id ', 'user_id ', 'pur_date', 'updated_at', 'created_at', 'package_points', 'order_nr '];

    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false,
          table: false,
        },

        {
          type: 'input',
          column: 'order_nr',
          text: 'order No.',
          name: 'order_nr',
          multiedit: false,
          required: true,
          disabled: true,
          create: false,
        },
        {
          type: 'input',
          column: 'name',
          text: 'person name',
          name: 'name',
          multiedit: false,
          required: false,
          edit: false,
          create: false,
        },

        {
          type: 'input',
          column: 'email',
          text: 'email',
          name: 'email',
          multiedit: false,
          required: false,
          edit: false,
          create: false,
        },

        {
          type: 'select',
          url: 'crm/people',
          list: {
            value: 'id',
            text: 'fullname',
            data: [],
          },
          column: 'user_id',
          text: this.$t('fields.person'),
          name: 'person',
          apiObject: {
            name: 'person.name',
          },
          table: false,
        },
        {
          type: 'input',
          column: 'package_points',
          text: 'package points',
          name: 'package_points',
          required: false,
          edit: false,
          create: false,
        },

        // package_points
        {
          type: 'select',
          url: 'crm/package',
          list: {
            value: 'id',
            text: 'full_name',
            data: [],
          },
          column: 'package_id',
          text: 'package name',
          name: 'package',
          apiObject: {
            name: 'package.package_name',
          },
          table: false,
        },
        {
          type: 'input',
          column: 'package_name',
          text: 'package name',
          name: 'package_name',
          multiedit: false,
          required: false,
          edit: false,
          create: false,
        },

        {
          type: 'input',
          column: 'package_price',
          text: 'package price',
          name: 'package_price',
          multiedit: false,
          required: false,
          edit: false,
          create: false,
        },

        {
          type: 'input',
          column: 'pur_date',
          text: 'purche date',
          name: 'pur_date',
          multiedit: false,
          required: false,
          edit: false,
          create: false,
        },
      ]
    },
  },
}
