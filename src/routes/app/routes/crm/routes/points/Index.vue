<template>
  <crud
    :prefix="prefix"
    :path="path"
    :page-title="pageTitle"
    :fields-info="fieldsInfo"
    :updateManyMode= false
    :removeManyMode= false
    :editMode= false
    :selectManyMode= false
    :details-title="$t('detailsTitle')"
     mode="ServerSide"
      delete-mode="hard"
      primary-key="id"
  >
  </crud>
</template>

<script>
import Crud from '@/utils/crud/components/Crud.vue'
import FieldsInfoMixin from './mixins/fields'
import ItemElementsMixin from './mixins/item-elements'
import LocalesMixin from './mixins/locales'

export default {
  mixins: [
    FieldsInfoMixin,
    LocalesMixin,
    ItemElementsMixin,
  ],
  data () {
    return {
      prefix: 'crm',
      path: 'points',
      pageTitle: 'crm.points',
    }
  },
  components: {
    Crud,
  },
}

</script>
