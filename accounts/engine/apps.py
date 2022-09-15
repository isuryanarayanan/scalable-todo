""" App configuration """
from django.apps import AppConfig


class EngineConfig(AppConfig):
    """ Class which contains the app configurations """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'engine'

    def ready(self):
        """ When app is mounted """
        # pylint: disable=import-outside-toplevel
        # pylint: disable=unused-import
        from engine import signals
